import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';

const BlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryInput, setCategoryInput] = useState('');
    const [categories, setCategories] = useState([]);

    const{ user } = useSession();
    const[error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Failed to fetch categories', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();


        // posted_by and created_on should be automatically handled by the backend (posted by could use the user.Username from sessioncontext.jsx)
        try {
            const response = await api.post('/api/posts', {title: title, content: content})
            const data = response.data;

            setTitle('');
            setContent('');

            navigate('/');

        } catch (error) {
            console.error('Post Failed', error);
            setError('Failed to create Post')
        }
    };




    return (
        <form onSubmit={handleSubmit}>
            <h2>Blog Post</h2>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Enter your post here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                list="category-list"
                placeholder="Enter categories"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
            />
            <datalist id="category-list">
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name} />
                ))}
            </datalist>
            <button type="submit">POST</button>
        </form>
    )
    
};