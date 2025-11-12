// Load names when page opens
window.onload = loadNames;

// CREATE - Add new name
function saveName() {
    let id = document.getElementById('nameId').value;
    let name = document.getElementById('name').value.trim();
    
    if (!name) {
        alert('Please enter a name');
        return;
    }
    
    let names = getNames();
    
    if (id) {
        // UPDATE - Edit existing name
        let nameIndex = names.findIndex(n => n.id == id);
        if (nameIndex !== -1) {
            names[nameIndex] = { id: parseInt(id), name: name };
        }
    } else {
        // CREATE - Add new name
        let newId = names.length > 0 ? Math.max(...names.map(n => n.id)) + 1 : 1;
        let newName = { id: newId, name: name };
        names.push(newName);
    }
    
    saveNames(names);
    resetForm();
    loadNames();
}

// READ - Show all names
function loadNames() {
    let names = getNames();
    let tableBody = document.getElementById('nameTableBody');
    let noDataMessage = document.getElementById('noDataMessage');
    
    if (names.length === 0) {
        tableBody.innerHTML = '';
        noDataMessage.style.display = 'block';
        return;
    }
    
    noDataMessage.style.display = 'none';
    
    tableBody.innerHTML = names.map(name => `
        <tr>
            <td>${name.id}</td>
            <td>${name.name}</td>
            <td>
                <button onclick="editName(${name.id})">Edit</button>
                <button onclick="deleteName(${name.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// UPDATE - Edit name
function editName(id) {
    let names = getNames();
    let name = names.find(n => n.id === id);
    
    if (name) {
        document.getElementById('nameId').value = name.id;
        document.getElementById('name').value = name.name;
        document.getElementById('submitBtn').textContent = 'Update Name';
        document.getElementById('formTitle').textContent = 'Edit Name';
        document.getElementById('cancelBtn').style.display = 'inline-block';
    }
}

// DELETE - Remove name
function deleteName(id) {
    if (confirm('Delete this name?')) {
        let names = getNames();
        let updatedNames = names.filter(n => n.id !== id);
        saveNames(updatedNames);
        loadNames();
    }
}

// Helper functions
function getNames() {
    let namesJSON = localStorage.getItem('names');
    return namesJSON ? JSON.parse(namesJSON) : [];
}

function saveNames(names) {
    localStorage.setItem('names', JSON.stringify(names));
}

function resetForm() {
    document.getElementById('nameId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('submitBtn').textContent = 'Add Name';
    document.getElementById('formTitle').textContent = 'Add Name';
    document.getElementById('cancelBtn').style.display = 'none';
}