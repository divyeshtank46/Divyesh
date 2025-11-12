
        // Storage Key
        const STORAGE_KEY = 'users';

        // Load users when page loads
        window.onload = function() {
            loadUsers();
        };

        // Load users from localStorage
        function loadUsers() {
            const users = getUsers();
            renderUsers(users);
        }

        // Get users from localStorage
        function getUsers() {
            const usersJSON = localStorage.getItem(STORAGE_KEY);
            return usersJSON ? JSON.parse(usersJSON) : [];
        }

        // Save users to localStorage
        function saveUsers(users) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        }

        // Render users in table
        function renderUsers(users) {
            const userTableBody = document.getElementById('userTableBody');
            const noDataMessage = document.getElementById('noDataMessage');
            
            if (users.length === 0) {
                userTableBody.innerHTML = '';
                noDataMessage.style.display = 'block';
                return;
            }
            
            noDataMessage.style.display = 'none';
            
            userTableBody.innerHTML = users.map(user => `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone || 'N/A'}</td>
                    <td>
                        <button onclick="editUser(${user.id})">Edit</button>
                        <button onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                </tr>
            `).join('');
        }

        // Save user (create or update)
        function saveUser() {
            const id = document.getElementById('userId').value;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (!name || !email) {
                alert('Please fill in required fields');
                return;
            }
            
            const users = getUsers();
            
            if (id) {
                // Update
                const userIndex = users.findIndex(user => user.id == id);
                if (userIndex !== -1) {
                    users[userIndex] = { id: parseInt(id), name, email, phone };
                }
            } else {
                // Create
                const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                const newUser = { id: newId, name, email, phone };
                users.push(newUser);
            }
            
            saveUsers(users);
            resetForm();
            loadUsers();
        }

        // Edit user
        function editUser(id) {
            const users = getUsers();
            const user = users.find(user => user.id === id);
            
            if (user) {
                document.getElementById('userId').value = user.id;
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                document.getElementById('phone').value = user.phone;
                
                document.getElementById('submitBtn').textContent = 'Update User';
                document.getElementById('formTitle').textContent = 'Edit User';
                document.getElementById('cancelBtn').style.display = 'inline-block';
            }
        }

        // Delete user
        function deleteUser(id) {
            if (confirm('Delete this user?')) {
                const users = getUsers();
                const updatedUsers = users.filter(user => user.id !== id);
                saveUsers(updatedUsers);
                loadUsers();
            }
        }

        // Reset form
        function resetForm() {
            document.getElementById('userForm').reset();
            document.getElementById('userId').value = '';
            document.getElementById('submitBtn').textContent = 'Add User';
            document.getElementById('formTitle').textContent = 'Add User';
            document.getElementById('cancelBtn').style.display = 'none';
        }