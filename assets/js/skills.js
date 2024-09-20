document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.getElementById('skills-container');

    const skillsHTML = `
        <p class="list"><span class="list-icon text-base" style="color: #FBBF24;"><i class="fas fa-code"></i></span><strong>Programming Languages:</strong> <span class="text-gray-600">Python, SQL, C, C++</span></p>
        <p class="list"><span class="list-icon" style="color: #34D399;"><i class="fas fa-laptop-code"></i></span><strong>DS & ML Tools (Python):</strong> <span class="text-gray-600">NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Keras, TensorFlow, PyTorch</span></p>
        <p class="list"><span class="list-icon" style="color: #60A5FA;"><i class="fas fa-brain"></i></span><strong>ML Techniques:</strong> <span class="text-gray-600">ML Algorithms, Deep Learning, Computer Vision, etc</span></p>
        <p class="list"><span class="list-icon" style="color: #F43F5E;"><i class="fas fa-chart-line"></i></span><strong>DS Techniques:</strong> <span class="text-gray-600">EDA, Hypothesis Testing, Sampling, Statistical Testing, Correlation Analysis and Inference</span></p>
        <p class="list"><span class="list-icon" style="color: #A78BFA;"><i class="fas fa-table"></i></span><strong>Data Analysis:</strong> <span class="text-gray-600">MS Excel, Tableau, Power BI</span></p>
        <p class="list"><span class="list-icon" style="color: #FBBF24;"><i class="fas fa-robot"></i></span><strong>IT Automation:</strong> <span class="text-gray-600">Automation in MS Word, PowerPoint, Excel, Google Sheets, Python-based Photo Manipulations</span></p>
        <p class="list"><span class="list-icon" style="color: #F43F5E;"><i class="fas fa-cogs"></i></span><strong>Others:</strong> <span class="text-gray-600">Product Development, Project Management, Business Development and Strategic Planning and Analysis</span></p>
    `;

    skillsContainer.innerHTML = skillsHTML;
});
