const taskContainer = document.querySelector(".task__container")

const addNewCard = () => {
    // get task data 
    const taskData ={
        id: `${Date.now()}`, //tempelate literal
        title: document.getElementById("TaskTitle").value,
        image: document.getElementById("imageURL").value,
        type: document.getElementById("TaskType").value,
        description: document.getElementById("TaskDescription").value,
    };
    //generate html code

    const newCard = 
        `<div  id=${taskData.id} class="col-md-6 col-lg-4 my-3">
        <div class="card ">
          <div class="card-header d-flex justify-content-end gap-2">
            <button class="btn btn-outline-info ">
              <i class="fal fa-pencil"></i>
            </button>
            <button class="btn btn-outline-danger">
              <i class="far fa-trash-alt"></i>
            </button>
           
          </div>
          <div class="card-body">
            <img src=${taskData.image} alt="image" class="card-img"/>
            <h5 class="card-title mt-4">${taskData.title}</h5>
            <p class="card-text">${taskData.description}</p>
            <span class="badge bg-primary">${taskData.type}</span>
          </div>
          <div class="card-footer ">
            <button class="btn btn-outline-primary">Open Task</button>
          </div>
        </div>
        </div> `;
    

    //inject it to DOM
taskContainer.insertAdjacentHTML("beforeend", newCard);

    //clear form
    document.getElementById("TaskTitle").value="";
    document.getElementById("imageURL").value="";
    document.getElementById("TaskType").value="";
    document.getElementById("TaskDescription").value="";

    return;

};