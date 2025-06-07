import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { supabase } from '@/lib/supabaseClient';
import { SALON_ID } from '@/lib/constants';

interface Category {
  id: number;
  name: string;
  sort_order: number;
}

export default function CategoryEditor() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [editingSort, setEditingSort] = useState<number | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('salon_id', SALON_ID)
      .order('sort_order');

    if (error) {
      toast.error('Failed to load categories');
      return;
    }

    setCategories(data || []);
  }

  async function handleAddCategory() {
    const trimmed = newCategory.trim();
    if (!trimmed) return toast.error('Category name cannot be empty.');

    const nextSort = categories.length + 1;

    const { error } = await supabase.from('categories').insert({
      name: trimmed,
      sort_order: nextSort,
      salon_id: SALON_ID,
    });

    if (error) return toast.error('Failed to add category.');

    toast.success('Category added!');
    setNewCategory('');
    fetchCategories();
  }

  async function handleUpdateCategory(id: number) {
    const { error } = await supabase.from('categories').update({
      name: editingName,
      sort_order: editingSort,
    }).eq('id', id);

    if (error) return toast.error('Update failed.');

    toast.success('Category updated.');
    setEditingId(null);
    fetchCategories();
  }

  async function handleDeleteCategory(id: number) {
    if (!window.confirm('Are you sure?')) return;

    const { error } = await supabase.from('categories').delete().eq('id', id);

    if (error) return toast.error('Delete failed.');

    toast.success('Category deleted.');
    fetchCategories();
  }

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-lg font-bold mb-4">Edit Categories</h3>

      {/* Add new category */}
      <div className="flex gap-4 mb-6">
        <input
          className="border p-2 rounded w-full"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New category name"
        />
        <button onClick={handleAddCategory} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* Category list */}
      <div className="space-y-2">
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between border-b py-2">
            {editingId === cat.id ? (
              <>
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="border p-1 rounded w-1/2"
                />
                <input
                  type="number"
                  value={editingSort ?? cat.sort_order}
                  onChange={(e) => setEditingSort(parseInt(e.target.value))}
                  className="border p-1 rounded w-24 ml-2"
                />
              </>
            ) : (
              <span className="font-medium">
                {cat.name} <span className="text-gray-400">(#{cat.sort_order})</span>
              </span>
            )}

            <div className="flex gap-2">
              {editingId === cat.id ? (
                <>
                  <button className="text-green-600" onClick={() => handleUpdateCategory(cat.id)}>
                    Save
                  </button>
                  <button className="text-gray-500" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="text-blue-600"
                    onClick={() => {
                      setEditingId(cat.id);
                      setEditingName(cat.name);
                      setEditingSort(cat.sort_order);
                    }}
                  >
                    Edit
                  </button>
                  <button className="text-red-600" onClick={() => handleDeleteCategory(cat.id)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
