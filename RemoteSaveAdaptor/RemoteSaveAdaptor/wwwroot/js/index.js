ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit, ej.grids.Filter, ej.grids.Page, ej.grids.Sort);

load();
var data;

function load() {
    fetch('https://localhost:7035/api/Orders')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to Fetch Data. Please check URL or network connectivity.`);
            }
            return response.json();
        })
        .then(jsonValue => {
            data = new ej.data.DataManager({
                json: jsonValue,
                insertUrl: 'https://localhost:7035/api/Orders/Insert',
                updateUrl: 'https://localhost:7035/api/Orders/Update',
                removeUrl: 'https://localhost:7035/api/Orders/Remove',
                adaptor: new ej.data.RemoteSaveAdaptor()
            });
            createGrid();
        });
}

function createGrid() {
    var grid = new ej.grids.Grid({
        dataSource: data,
        allowPaging: true,
        allowSorting: true,
        allowFiltering: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
            { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
            { field: 'ShipCity', headerText: 'ShipCity', width: 140 },
            { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
        ]
    });
    grid.appendTo('#Grid');
}