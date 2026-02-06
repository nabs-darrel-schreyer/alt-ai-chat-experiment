// Alternative Chat UI - Application Logic (TypeScript)

// Type Definitions
interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

interface Tab {
    id: number;
    name: string;
    messages: Message[];
}

interface Project {
    id: number;
    name: string;
    description: string;
    tabs: Tab[];
    activeTabId: number;
}

interface AppState {
    projects: Project[];
    activeProjectId: number;
    nextProjectId: number;
    nextTabId: number;
    selectedModel: string;
}

// Application State
const state: AppState = {
    projects: [
        { 
            id: 1, 
            name: 'Sample Project 1', 
            description: 'An example project to demonstrate the UI',
            tabs: [{ id: 1, name: 'Thread 1', messages: [] }], 
            activeTabId: 1 
        },
        { 
            id: 2, 
            name: 'Sample Project 2', 
            description: 'Another example project',
            tabs: [{ id: 1, name: 'Thread 1', messages: [] }], 
            activeTabId: 1 
        },
        { 
            id: 3, 
            name: 'Sample Project 3', 
            description: 'Third example project',
            tabs: [{ id: 1, name: 'Thread 1', messages: [] }], 
            activeTabId: 1 
        }
    ],
    activeProjectId: 1,
    nextProjectId: 4,
    nextTabId: 2,
    selectedModel: 'GPT-4'
};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderProjects();
    renderTabs();
    loadProjectContent();
});

// Event Listeners
function initializeEventListeners(): void {
    // New Project button
    const newProjectBtn = document.querySelector('.new-session-btn');
    newProjectBtn?.addEventListener('click', showNewProjectModal);
    
    // Modal controls
    const modalClose = document.getElementById('modalClose');
    const modalCancel = document.getElementById('modalCancel');
    const modalCreate = document.getElementById('modalCreate');
    const modal = document.getElementById('newProjectModal');
    
    modalClose?.addEventListener('click', hideNewProjectModal);
    modalCancel?.addEventListener('click', hideNewProjectModal);
    modalCreate?.addEventListener('click', handleCreateProject);
    
    // Close modal on outside click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideNewProjectModal();
        }
    });
    
    // Send button
    const sendBtn = document.querySelector('.send-btn');
    sendBtn?.addEventListener('click', handleSendMessage);
    
    // Add Tab button
    const addTabBtn = document.querySelector('.add-tab-btn');
    addTabBtn?.addEventListener('click', createNewTab);
    
    // Prompt input - Enter key handler
    const promptInput = document.querySelector('.prompt-input') as HTMLTextAreaElement;
    promptInput?.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    });
    
    // Model selector
    const modelSelect = document.querySelector('.model-select') as HTMLSelectElement;
    modelSelect?.addEventListener('change', (e: Event) => {
        const target = e.target as HTMLSelectElement;
        state.selectedModel = target.value;
    });
}

// Modal Management
function showNewProjectModal(): void {
    const modal = document.getElementById('newProjectModal');
    const titleInput = document.getElementById('projectTitle') as HTMLInputElement;
    const descriptionInput = document.getElementById('projectDescription') as HTMLTextAreaElement;
    
    // Clear inputs
    if (titleInput) titleInput.value = '';
    if (descriptionInput) descriptionInput.value = '';
    
    modal?.classList.add('show');
    titleInput?.focus();
}

function hideNewProjectModal(): void {
    const modal = document.getElementById('newProjectModal');
    modal?.classList.remove('show');
}

function handleCreateProject(): void {
    const titleInput = document.getElementById('projectTitle') as HTMLInputElement;
    const descriptionInput = document.getElementById('projectDescription') as HTMLTextAreaElement;
    
    const title = titleInput?.value.trim() || '';
    const description = descriptionInput?.value.trim() || '';
    
    if (!title) {
        titleInput?.focus();
        return;
    }
    
    createNewProject(title, description);
    hideNewProjectModal();
}

// Project Management
function createNewProject(name: string, description: string): void {
    const projectId = state.nextProjectId++;
    const tabId = 1;
    const newProject: Project = {
        id: projectId,
        name: name,
        description: description,
        tabs: [{ id: tabId, name: 'Thread 1', messages: [] }],
        activeTabId: tabId
    };
    
    state.projects.push(newProject);
    state.activeProjectId = projectId;
    
    renderProjects();
    renderTabs();
    loadProjectContent();
    
    // Clear prompt input
    const promptInput = document.querySelector('.prompt-input') as HTMLTextAreaElement;
    if (promptInput) promptInput.value = '';
}

function selectProject(projectId: number): void {
    state.activeProjectId = projectId;
    renderProjects();
    renderTabs();
    loadProjectContent();
}

function closeProject(projectId: number, event: Event): void {
    event.stopPropagation();
    
    // Don't allow closing the last project
    if (state.projects.length === 1) {
        return;
    }
    
    const projectIndex = state.projects.findIndex(p => p.id === projectId);
    state.projects.splice(projectIndex, 1);
    
    // If we closed the active project, select the first one
    if (state.activeProjectId === projectId) {
        state.activeProjectId = state.projects[0].id;
    }
    
    renderProjects();
    renderTabs();
    loadProjectContent();
}

function renderProjects(): void {
    const projectsList = document.querySelector('.sessions-list');
    if (!projectsList) return;
    
    projectsList.innerHTML = '';
    
    state.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `session-item ${project.id === state.activeProjectId ? 'active' : ''}`;
        projectItem.title = project.description; // Show description on hover
        projectItem.innerHTML = `
            <span class="session-name">${escapeHtml(project.name)}</span>
            <button class="session-close">×</button>
        `;
        
        projectItem.addEventListener('click', () => selectProject(project.id));
        const closeBtn = projectItem.querySelector('.session-close');
        closeBtn?.addEventListener('click', (e) => closeProject(project.id, e));
        
        projectsList.appendChild(projectItem);
    });
}

// Tab Management
function createNewTab(): void {
    const activeProject = getActiveProject();
    if (!activeProject) return;
    
    const tabId = state.nextTabId++;
    const newTab: Tab = {
        id: tabId,
        name: `Thread ${activeProject.tabs.length + 1}`,
        messages: []
    };
    
    activeProject.tabs.push(newTab);
    activeProject.activeTabId = tabId;
    
    renderTabs();
    loadProjectContent();
}

function selectTab(tabId: number): void {
    const activeProject = getActiveProject();
    if (!activeProject) return;
    
    activeProject.activeTabId = tabId;
    renderTabs();
    loadProjectContent();
}

function renderTabs(): void {
    const activeProject = getActiveProject();
    if (!activeProject) return;
    
    const tabsHeader = document.querySelector('.tabs-header');
    const addTabBtn = tabsHeader?.querySelector('.add-tab-btn');
    
    if (!tabsHeader) return;
    
    // Clear existing tabs (except add button)
    Array.from(tabsHeader.children).forEach(child => {
        if (!child.classList.contains('add-tab-btn')) {
            child.remove();
        }
    });
    
    // Render tabs
    activeProject.tabs.forEach(tab => {
        const tabElement = document.createElement('div');
        tabElement.className = `tab ${tab.id === activeProject.activeTabId ? 'active' : ''}`;
        tabElement.textContent = tab.name;
        tabElement.addEventListener('click', () => selectTab(tab.id));
        
        if (addTabBtn) {
            tabsHeader.insertBefore(tabElement, addTabBtn);
        }
    });
}

// Message Handling
function handleSendMessage(): void {
    const promptInput = document.querySelector('.prompt-input') as HTMLTextAreaElement;
    const prompt = promptInput?.value.trim() || '';
    
    if (!prompt) return;
    
    const activeProject = getActiveProject();
    const activeTab = getActiveTab();
    
    if (!activeProject || !activeTab) return;
    
    // Add user message
    const userMessage: Message = {
        role: 'user',
        content: prompt,
        timestamp: new Date()
    };
    activeTab.messages.push(userMessage);
    
    // Clear input
    if (promptInput) promptInput.value = '';
    
    // Render messages
    loadProjectContent();
    
    // Simulate AI response
    setTimeout(() => {
        const aiMessage: Message = {
            role: 'assistant',
            content: generateMockResponse(prompt, activeProject),
            timestamp: new Date()
        };
        activeTab.messages.push(aiMessage);
        loadProjectContent();
    }, 500);
}

function generateMockResponse(prompt: string, project: Project): string {
    // Simple mock response generator
    const responses = [
        `I understand you're asking about "${prompt}". This is a simulated response from ${state.selectedModel} for the project "${project.name}". In a real implementation, this would connect to an actual AI model API.`,
        `Thank you for your question about "${prompt}". This interface is designed to demonstrate the alternative chat UI layout with top-positioned prompt input and tabbed threads. Project: ${project.name}`,
        `Regarding "${prompt}" - this is a demonstration response. The UI supports multiple projects and thread tabs, allowing you to organize different discussion threads within each project. Current project: ${project.name}`,
        `Processing your query: "${prompt}". This mock response shows how the chat interface would display AI-generated content. Each thread tab can maintain its own independent chat history in project "${project.name}".`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function loadProjectContent(): void {
    const activeTab = getActiveTab();
    const activeProject = getActiveProject();
    if (!activeTab || !activeProject) return;
    
    const responseArea = document.querySelector('.response-area');
    if (!responseArea) return;
    
    if (activeTab.messages.length === 0) {
        responseArea.innerHTML = `
            <div class="message assistant">
                <div class="message-content">
                    <p><strong>${escapeHtml(activeProject.name)}</strong></p>
                    <p>${escapeHtml(activeProject.description)}</p>
                    <p>Welcome to the alternative chat UI! This is where your AI responses will appear.</p>
                    <p>Each tab can hold a different thread from the same project.</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Render messages
    responseArea.innerHTML = '';
    activeTab.messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.role}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${escapeHtml(message.content)}</p>
            </div>
        `;
        responseArea.appendChild(messageDiv);
    });
    
    // Scroll to bottom
    const tabContent = document.querySelector('.tab-content');
    if (tabContent) {
        tabContent.scrollTop = tabContent.scrollHeight;
    }
}

// Utility Functions
function getActiveProject(): Project | undefined {
    return state.projects.find(p => p.id === state.activeProjectId);
}

function getActiveTab(): Tab | undefined {
    const activeProject = getActiveProject();
    if (!activeProject) return undefined;
    return activeProject.tabs.find(t => t.id === activeProject.activeTabId);
}

function escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
