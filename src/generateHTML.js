function card_section(team, count) {
    var full_section = "";

    for(var i = 0; i <= count; i++) {
        if(team[i].getRole() === "Manager"){
            full_section += `
            <div class="column is-narrow">
                <div class="card" style="width: 300px">
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-3">${team[i].name}</p>
                            <p class="subtitle is-4">${team[i].getRole()}</p>
                            <p class="subtitle is-6">ID: ${team[i].id}</p>
                            <p class="subtitle is-6">Email: <a href="mailto://${team[i].email}">${team[i].email}</a></p>
                            <p class="subtitle is-6">Office Number: ${team[i].OfficeNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else if (team[i].getRole() === "Engineer"){
            full_section += `
            <div class="column is-narrow">
                <div class="card" style="width: 300px">
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-3">${team[i].name}</p>
                            <p class="subtitle is-4">${team[i].getRole()}</p>
                            <p class="subtitle is-6">ID: ${team[i].id}</p>
                            <p class="subtitle is-6">Email: <a href="mailto://${team[i].email}">${team[i].email}</a></p>
                            <p class="subtitle is-6">GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            `
        } else if(team[i].getRole() === "Intern"){
            full_section += `
            <div class="column is-narrow">
                <div class="card" style="width: 300px">
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-3">${team[i].name}</p>
                            <p class="subtitle is-4">${team[i].getRole()}</p>
                            <p class="subtitle is-6">ID: ${team[i].id}</p>
                            <p class="subtitle is-6">Email: <a href="mailto://${team[i].email}">${team[i].email}</a></p>
                            <p class="subtitle is-6">School: ${team[i].school}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    return full_section;
}

module.exports = (team, count) => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    
        <title>Team Profile</title>
    </head>
    <body>
    
      <section class="hero is-primary">
        <div class="hero-body has-text-centered columns is-vcentered">
          <div class="container">
            <h1 class="title">
              My Team
            </h1>
          </div>
        </div>
      </section>
    
      <section class="section">
        <div class="container">
            <div id="houseCards" class="columns is-mobile is-multiline is-centered">

            ${card_section(team, count)}

            </div>
        </div>
    
    
      </section>
       
    </body>
    
    </html>
    `;
  };