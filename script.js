function showSection(sectionNumber) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            const nextSection = document.getElementById(`section${sectionNumber}`);
            nextSection.classList.add('active');
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Add subtle animation to new section
            nextSection.style.animation = 'none';
            setTimeout(() => {
                nextSection.style.animation = 'gentleAppear 1.2s ease-out';
            }, 10);
        }