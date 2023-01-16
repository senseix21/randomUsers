console.log("Starting to connect")
const loadUser = () => {
    const url = `https://randomuser.me/api/?gender=male`
    fetch(url)
        .then(response => response.json())
        .then(data => displayUser(data.results[0]))
}

const displayUser = (user) => {
    const randomuserCon = document.getElementById('user')
    randomuserCon.innerHTML = ``
    const userDiv = document.createElement('div')
    userDiv.innerHTML = `
    <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-lg-4">
                    <div class="card mb-4 ">
                        <div class="card-body ">
                            <img src="${user.picture.large}"
                                alt="avatar" class="rounded-circle img-fluid d-flex align-items-center justify-content-center" style="width: 120px;">
                            <h5 class="my-3">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                            <p class="text-muted mb-1">Gender: ${user.gender}</p>
                            <p class="text-muted mb-1">Date of Birth: ${user.dob.date}</p>
                            <p class="text-muted mb-1">Age: ${user.dob.age}</p>
                            <p class="text-muted mb-1">Address: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                            <p class="text-muted mb-1">E-mail: ${user.email}</p>
                            <p class="text-muted mb-1">Phone: ${user.phone}</p>
                            <div class="d-flex justify-content-center mb-2">
                                <button type="button" class="btn btn-primary">Follow</button>
                                <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button onclick="loadUser()" class="btn btn-primary" type="button">Random User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    randomuserCon.appendChild(userDiv);
    console.log(user)
}