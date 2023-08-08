import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (evento) => {
        evento.preventDefault();
        console.log(title);

        {
            /*validacion para que no ingrese todo vacío */
        }
        if (!title.trim()) {
            setTitle("");
        } else {
            {
                /*este createTodo en esta validacion crea un nuevo todo sin considerar los espacios vacios (trims) 
            y agrega la nueva tarea al listTodo*/
            }
            createTodo(title);

            {
                /*con este setTitle lo reiniciamos, asi el input se limpia */
            }
            setTitle("");
        }
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Crea una nueva tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
