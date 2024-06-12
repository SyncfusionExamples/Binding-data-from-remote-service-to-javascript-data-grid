ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Edit, ej.grids.Filter, ej.grids.Page, ej.grids.Sort);

var data = new ej.data.DataManager({
    url: 'https://localhost:7073/api/Grid',
    insertUrl: 'https://localhost:7073/api/Grid/Insert',
    updateUrl: 'https://localhost:7073/api/Grid/Update',
    removeUrl: 'https://localhost:7073/api/Grid/Remove',
    adaptor: new ej.data.UrlAdaptor()
});

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