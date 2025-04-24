
import { CustomAdaptor } from './CustomAdaptor.js';

ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.Filter, ej.grids.Sort, ej.grids.Page, ej.grids.Edit);

var data = new ej.data.DataManager({
    url: 'https://localhost:7295/odata/orders', // Here xxxx represents the port number
    adaptor: new CustomAdaptor()
});

var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging:true,
    allowFiltering: true,
    allowSorting: true,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, isPrimaryKey: true, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', width: 140 },
        { field: 'ShipCountry', headerText: 'ShipCountry', width: 140 }
    ]
});

grid.appendTo('#Grid');