import PropTypes from "prop-types";

function TodoAdd({todo, setTodo, addTodo}) {
    return (
        <input
            type="text"
            className="todo-input"
            value={todo}
            placeholder="What needs to be done?"
            onChange={(event) => setTodo(event.target.value)}
            onKeyUp={addTodo}
        />
    );
}

TodoAdd.propTypes = {
    todo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default TodoAdd;