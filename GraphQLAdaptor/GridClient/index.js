var data = new ej.data.DataManager({
    url: "http://localhost:4200/",  // xxxx represents the port number
    adaptor: new ej.data.GraphQLAdaptor({
        response: {
            result: 'getOrders.result',// Retrieve the actual order data
            count: 'getOrders.count'    // Retrieve the total count of orders
        },
        // GraphQL query to fetch orders
        query: `query getOrders($datamanager: DataManager) {
        getOrders(datamanager: $datamanager) {
          count,
          result{
          OrderID, CustomerID, EmployeeID, ShipCountry}
          }
        }`,

        // mutation for performing CRUD
        getMutation: function (action) {
            if (action === 'insert') {
                return `mutation CreateOrderMutation($value: OrderInput!){
           createOrder(value: $value){
            OrderID, CustomerID, ShipCity, ShipCountry
           }}`;
            }
            if (action === 'update') {
                return `mutation UpdateOrderMutation($key: Int!, $keyColumn: String,$value: OrderInput){
           updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
         }`;
            } else {
                return `mutation RemoveOrderMutation($key: Int!, $keyColumn: String, $value: OrderInput){
           deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
          }`;
            }
        }
    }),
});
ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar, ej.grids.Sort, ej.grids.Page, ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    allowFiltering: true,
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'],
    editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true, },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number', isPrimaryKey: true },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 140 }
    ]
});

grid.appendTo('#Grid');