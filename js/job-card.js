// Sample JSON data
const jobData = [
  { "title": "Software Support Engineer", "company": "Information Technology", "businessArea":"Technology",  "location": "hydrabad | India" },
  { "title": "Software Engineer - Java", "company": "Software Development", "businessArea":"Technology",  "location": "Indore | India" },
  { "title": "Senior Software Engineer", "company": "Software Engineering", "businessArea":"Technology",  "location": "Chicago | USA" },
  { "title": "Senior Quality Analyst", "company": "Software Testing & QA", "businessArea":"Technology",  "location": "Indore | India" },
  { "title": "Software Engineer - Nodejs/Angular", "company": "Full-Stack Web Development", "businessArea":"Technology",  "location": "Indore | India" },
  { "title": "Dev Ops Engineer - Google Cloud", "company": "DevOps Engineer", "businessArea":"Technology",  "location": "Indore | India" },
  { "title": "Data Engineer", "company": "Data Engineering", "businessArea":"Technology",  "location": "Indore | India" }
];

  // Get the container element
  const jobCardContainer = $("#jobCardContainer");

  // Map through the JSON data and create Owl Carousel items
  jobData.map(job => {
    // Create a div element for each job
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    

    // Populate the div with job data
    jobCard.innerHTML = `
      <div class="job-details">
        <h2><a href="https://udaysolanki.netlify.app"  class='job-title'>${job.title}</a></h2>
        <p class="company">${job.company}</p>
        <span class="business-area">${job.businessArea}</span>
        <div class="location-and-apply">
          <div class="location-and-apply-details">
            <span class="location">${job.location}</span>
            <a href="#" class="apply-button">Apply Now</a>
          </div>
        </div>
      </div>
    `;

    // Append the job card to the container
    jobCardContainer.append(jobCard);
  });

  // Initialize Owl Carousel with custom navigation and hover stop
  const owl = jobCardContainer.owlCarousel({
    loop: true,
    margin: 10,
    nav: false, // Disable default navigation
    dots: false, // Disable default dots
    
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Set autoplay interval in milliseconds (e.g., 3000 ms = 3 seconds)
    autoplayHoverPause: true, // Pause autoplay on hover
    animateOut: 'fadeOut', // Add fade out animation
    animateIn: 'fadeIn' // Add fade in animation
  });

  // Custom navigation button events
  $(".custom-prev-btn").on("click", function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next-btn").on("click", function () {
    owl.trigger("next.owl.carousel");
  });
 
  