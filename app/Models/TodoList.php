<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class TodoList extends Model
{
    public $timestamps = false;
    protected $table = 'todolist';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'status'
    ];
}
