public class MyApiControllerTests
{
    [Fact]
    public void Get_ReturnsOkResult()
    {
        // Arrange
        var mockService = new Mock<IMyService>();
        mockService.Setup(service => service.GetData()).Returns("dummy data");

        var controller = new MyApiController(mockService.Object);

        // Act
        var result = controller.Get();

        // Assert
        Assert.IsType<OkObjectResult>(result);
    }
}
