using DontForgetTheRamen.Domain.Services;
using DontForgetTheRamen.Infrastructure;
using DontForgetTheRamen.Infrastructure.Hubs;
using DontForgetTheRamen.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Logging.ClearProviders();
builder.Logging.AddLog4Net("log4net.config");

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddSignalR();
builder.Services.AddDbContext<AppDbContext>();
builder.Services.AddScoped<IShoppingListItemService, ShoppingListItemService>();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.MapHub<ShoppingItemHub>("/hub/shoppingitem");

app.Run();
