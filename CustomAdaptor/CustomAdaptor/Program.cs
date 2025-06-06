using CustomAdaptor.Models;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Create an ODataConventionModelBuilder to build the OData model
var modelBuilder = new ODataConventionModelBuilder();

// Register the "Orders" entity set with the OData model builder
modelBuilder.EntitySet<OrdersDetails>("Orders");

// Add controllers with OData support to the service collection

var recordCount = OrdersDetails.GetAllRecords().Count;
builder.Services.AddControllers().AddOData(
    options => options
        .Count()
        .Filter() //searching and filtering
        .Select()
        .Expand()
        .OrderBy()
        .SetMaxTop(recordCount)
        .AddRouteComponents("odata", modelBuilder.GetEdmModel()));

var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();