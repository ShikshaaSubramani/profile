// Function to expand and collapse a card when clicked
function expandCard(cardElement) {
    // Check if the card is already expanded
    if (cardElement.classList.contains('expanded')) {
      // If already expanded, collapse it
      cardElement.classList.remove('expanded');
    } else {
      // Collapse all other cards
      const allCards = document.querySelectorAll('.card');
      allCards.forEach(card => card.classList.remove('expanded'));
      
      // Expand the clicked card
      cardElement.classList.add('expanded');
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', 
        {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
        );
    });


    function loadParticlesConfig() {
      if (window.innerWidth < 768) {
          particlesJS('particles-js', {
              particles: {
                  number: {
                      value: 50
                  },
                  size: {
                      value: 3
                  }
              },
              interactivity: {
                  events: {
                      onhover: {
                          enable: true,
                          mode: "repulse"
                      }
                  }
              }
          });
      } else {
          particlesJS('particles-js', {
              particles: {
                  number: {
                      value: 100
                  },
                  size: {
                      value: 5
                  }
              },
              interactivity: {
                  events: {
                      onhover: {
                          enable: true,
                          mode: "repulse"
                      }
                  }
              }
          });
      }
  }
  
  // Call the function on page load and window resize
  // window.onload = ;
  window.onresize = loadParticlesConfig;
  


window.onload = function() {
    loadParticlesConfig()
    const advanced=25;
    const intermediate=20;
    const beginner=15;
    WordCloud(document.getElementById('wordcloud1'), {
        list: [
          ['Python', advanced],
          ['Typescript', advanced],
          ['Javascript', advanced],
          ['R', intermediate],
          ['Ruby', intermediate],
          ['Groovy', intermediate],
          ['C', beginner],
          ['C++', beginner],
        ],
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'",
        color: "#232741",
        backgroundColor: "transparent",
        rotateRatio: 0,
        shuffle: false
    });

    WordCloud(document.getElementById('wordcloud2'), {
      list: [
        ['SQL', advanced],
        ['Snowflake', advanced],
        ['Tetra Data Platform', intermediate],
        ['Postgres', intermediate],
        ['MySQL', intermediate],
        ['MongoDB', intermediate],
        ['Oracle', beginner],
        ['Databricks', beginner],
        ['Apache Spark', beginner],
      ],
      fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'",
      color: "#232741",
      backgroundColor: "transparent",
      rotateRatio: 0,
      shuffle: false
  });

  WordCloud(document.getElementById('wordcloud3'), {
    list: [
      ['Nginx Docker', advanced],
      ['AWS', advanced],
      ['EC2', intermediate],
      ['ECS', intermediate],
      ['Proton', intermediate],
      ['Codebuild', intermediate],
      ['RDS Redshift', advanced],
      ['SQS SNS', intermediate],
      ['Opensearch', advanced],
      ['GCP', advanced],
      ['Drive API', intermediate],
      ['Calendar API', intermediate],
      ['Azure DevOps', beginner],
    ],
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'",
    color: "#232741",
    backgroundColor: "transparent",
    rotateRatio: 0,
    shuffle: false
  });

  WordCloud(document.getElementById('wordcloud4'), {
    list: [
      ['Git', advanced],
      ['SVN', intermediate],
      ['Bitbucket', advanced],
      ['JFrog', intermediate],
      ['Jira', advanced],
      ['Confluence', intermediate],
      ['Azure DevOps', intermediate],
      ['Asana', intermediate],
      ['PowerBI', beginner],
      ['Spotfire', beginner]
    ],
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'",
    color: "#232741",
    backgroundColor: "transparent",
    rotateRatio: 0,
    shuffle: false
  });
}

