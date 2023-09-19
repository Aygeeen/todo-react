import React from "react";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskText: ""
        }
    }
    addTask = () => {
        if (this.state.taskText.trim() !== "") {
            const newTask = {
                text: this.state.taskText
            }
            this.setState({
                tasks: [...this.state.tasks, newTask],
                taskText: ""
            })
        }
    }
    TaskChange = (e) => {
        this.setState({taskText: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <input
                        type="text"
                        placeholder="add a new task"
                        value={this.state.taskText}
                        onChange={this.TaskChange}
                    />
                    <button onClick={this.addTask}>Add Task</button>
                </div>
                <ul>
                    {this.state.tasks.map((task) => (
                        <li key={task.id}>{task.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDo;