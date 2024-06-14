using System.ComponentModel.DataAnnotations;

namespace ODataV4Adaptor.Models
{
    public class OrdersDetails
    {
        public static List<OrdersDetails> order = new List<OrdersDetails>();
        public OrdersDetails()
        {

        }
        public OrdersDetails(
        int OrderID, string CustomerId, string ShipCity, string ShipCountry)
        {
            this.OrderID = OrderID;
            this.CustomerID = CustomerId;
            this.ShipCity = ShipCity;
            this.ShipCountry = ShipCountry;
        }

        public static List<OrdersDetails> GetAllRecords()
        {
            if (order.Count() == 0)
            {
                int code = 10000;
                for (int i = 1; i < 10; i++)
                {
                    order.Add(new OrdersDetails(code + 1, "ALFKI","Berlin", "Denmark"));
                    order.Add(new OrdersDetails(code + 2, "ANATR", "Madrid", "Brazil"));
                    order.Add(new OrdersDetails(code + 3, "ANTON", "Cholchester", "Germany"));
                    order.Add(new OrdersDetails(code + 4, "BLONP", "Marseille", "Austria"));
                    order.Add(new OrdersDetails(code + 5, "BOLID", "tsawassen", "Switzerland"));
                    code += 5;
                }
            }
            return order;
        }
        [Key]
        public int? OrderID { get; set; }
        public string? CustomerID { get; set; }
        public string? ShipCity { get; set; }
        public string? ShipCountry { get; set; }
    }
}