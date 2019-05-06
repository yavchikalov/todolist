<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\TodoList;


class TodoListController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }
    public function index() {
        return TodoList::orderBy('id')->get()->toArray();
    }
    public function create(Request $request) {
        $name = $request->input('name');
        if ($name) {
            $todo = new TodoList();
            $todo->name = $name;
            if ($todo->save()) {
                return response()->json([
                    'status' => 'ok',
                    'message' => 'Успешно создано!',
                    'todo' => $todo::find($todo->id)
                ]);
            }
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Произошла ошибка при сохранении!'
        ]);
    }
    public function update(Request $request, $id) {

        $status = $request->input('status');
        $name = $request->input('name');

        if ($status || $name) {
            $todo = TodoList::findOrFail($id);
            if ($todo) {
                if ($status) $todo->status = !$todo->status;
                if ($name) $todo->name = !$todo->$name;
                if ($todo->save()) {
                    return response()->json([
                        'status' => 'ok',
                        'message' => 'Статус изменен!',
                        'todo' => TodoList::find($todo->id)
                    ]);
                }
            }
        }
        return response()->json([
            'status' => 'error',
            'message' => 'Произошла ошибка при обновлении! Попробуйте позже.'
        ]);
    }
    public function delete($id) {
        if ($id) {
            $todo = TodoList::findOrFail($id);
            if ($todo && $todo->delete()) {
                return response()->json([
                    'status' => 'ok',
                    'message' => 'Успешно удалено!'
                ]);
            }
        }
        return response()->json([
            'status' => 'error',
            'message' => 'При удалении произошла ошибка!'
        ]);
    }
}
