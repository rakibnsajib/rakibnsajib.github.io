// Function to load and parse the projects from a txt file
async function loadProjects() {
    try {
        const response = await fetch('projects.txt');
        const text = await response.text();

        // Split the content into individual projects, skipping empty lines
        const projects = text.trim().split(/\n\s*\n/).map(project => project.split('\n'));

        // Array of dynamic light background colors
        const colors = ['#DBEAFE', '#DCFCE7', '#FEF9C3', '#F3E8FF', '#FFE4E6', '#E0F2FE', '#E9D5FF', '#FEF3C7'];

        // Select the projects container
        const projectsContainer = document.getElementById('projects-container');

        projects.forEach((projectData) => {
            // Ensure project data contains all the required fields (at least 5 lines)
            if (projectData.length < 5) return; // Skip if the data is incomplete

            const [title, description, technologies, imagePath, githubLink] = projectData; // GitHub link is the only link

            // Create an array of technology names and shuffle the colors array
            const techArray = technologies.split(',');
            const selectedColors = colors.sort(() => 0.5 - Math.random()).slice(0, techArray.length); // Get unique colors

            // Create the project card HTML
            const projectElement = document.createElement('div');
            projectElement.className = '';

            projectElement.innerHTML = `
              <!-- shadow-sm shadow-gray-50 -->
              <a href="${githubLink}" class="group" target="_blank">
                <img class="w-full mb-2 rounded-xl border border-gray-200" src="${imagePath}" alt="Project photo">
                <p class="text-md text-gray-900 mb-1 mt-2 font-semibold group-hover:underline group-hover:underline-offset-4">
                  ${title}</p>

                <div>
                  ${techArray.map((tech, index) => {
                    // Use the unique color from the selectedColors array
                    const color = selectedColors[index];
                    return `
                      <button class="px-2 py-0.5 rounded-full text-xs font-sm mr-1 mb-1" 
                        style="background-color: ${color}; color: #374151;"> 
                        ${tech}
                      </button>
                    `;
                  }).join('')}
                </div>

                <p class="text-gray-600 mb-1 mt-2">${description}</p>

                <div class="flex items-center mt-1 text-sm border-0 text-ds_blue py-0.5 pr-1">
                  <a href="${githubLink}" target="_blank" class="flex items-center text-gray-600 font-bold hover:text-ds_blue">
                    View on GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 ml-2"> <!-- Increased size -->
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582v-2.032c-3.338.727-4.042-1.61-4.042-1.61-.547-1.387-1.338-1.757-1.338-1.757-1.093-.747.084-.732.084-.732 1.21.084 1.847 1.243 1.847 1.243 1.073 1.837 2.82 1.31 3.51 1 .108-.777.42-1.31.763-1.61-2.665-.305-5.467-1.332-5.467-5.93 0-1.313.469-2.387 1.243-3.228-.12-.306-.54-1.534.12-3.195 0 0 1.008-.322 3.3 1.23a11.497 11.497 0 013.003-.402c1.02.006 2.047.137 3.003.402 2.29-1.552 3.298-1.23 3.298-1.23.662 1.662.243 2.89.12 3.195.773.84 1.243 1.914 1.243 3.228 0 4.61-2.807 5.622-5.478 5.922.432.372.82 1.107.82 2.23v3.303c0 .324.19.7.8.582C20.565 21.797 24 17.296 24 12c0-6.63-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </a>
            `;

            // Append the project card to the projects container
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadProjects);
