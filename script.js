let fileData; 

document.getElementById('fileInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fileData = e.target.result;
    };
    reader.readAsText(file);
  }
});

function nextStep() {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');

  if (step1.style.display !== 'none') {
    
    step1.style.display = 'none';
    step2.style.display = 'block';
  } else if (step2.style.display !== 'none') {
    
    step2.style.display = 'none';
    step3.style.display = 'block';

    displayColumnSelection();
  }
}

function displayColumnSelection() {
  const fileType = document.getElementById('fileType').value;
  const charEncoding = document.getElementById('charEncoding').value;
  const delimiter = document.getElementById('delimiter').value;
  const hasHeader = document.getElementById('hasHeader').checked;
  const parsedData = [
    { Subcategory: 'Category A', Title: 'Product 1', Price: 20.0, Popularity: 50 },
    { Subcategory: 'Category B', Title: 'Product 2', Price: 30.0, Popularity: 70 },
  ];

  const columnListDiv = document.getElementById('columnList');
  parsedData[0] && Object.keys(parsedData[0]).forEach(column => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = column;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(column));
    columnListDiv.appendChild(label);
  });
}

function processData() {
  const selectedColumns = [];
  const checkboxes = document.querySelectorAll('#columnList input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    selectedColumns.push(checkbox.value);
  });

  // Display the selected columns and their values (replace this with your desired logic)
  alert(`Selected Columns: ${selectedColumns.join(', ')}`);
}
