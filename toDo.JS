let tasker = {
    selectElements: function(){
        this.taskInput = document.getElementById('input');
        this.taskList = document.getElementById('tasks');
        this.taskListChildren = this.taskList.children;
        this.addButton = document.getElementById('add-button');
        this.errorMessage = document.getElementById('error')
    },
    buildTask(){
        let taskListItem, taskCheckBox, taskValue, taskButton, taskTrash;

        taskListItem = document.createElement('li');
        taskListItem.setAttribute('class', 'task');

        taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox')

        taskValue = document.createTextNode(this.taskInput.value);

        taskButton = document.createElement('button');
        
        taskTrash = document.createElement('i');
        taskTrash.setAttribute('class', 'fa fa-trash')

        taskButton.appendChild(taskTrash)
    }
};
