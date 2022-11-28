const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
    try {
        await coonect();
        const todo = await Todo.create({
            title: "First Item",
            dueDate: new Date(),
            completed: false,
        });
        console.log('Created todo with ID) : ${todo.id}');
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    await createTodo();
})();