import pygame

pygame.init()

screen_width = 600
screen_height = 400
screen = pygame.display.set_mode((screen_width, screen_height))


snake = pygame.Rect(100, 100, 20, 20)

food = pygame.Rect(300, 300, 20, 20)

bg_color = (255, 255, 255)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    snake.x += snake_direction[0]
    snake.y += snake_direction[1]

    if snake.colliderect(food):
        snake.width += 20
        food = pygame.Rect(random.randint(0, screen_width - 20), random.randint(0, screen_height - 20), 20, 20)

    if snake.x < 0 or snake.x > screen_width or snake.y < 0 or snake.y > screen_height:
        pygame.quit()
        sys.exit()

    for i in range(len(snake) - 1):
        if snake[i].colliderect(snake[i + 1]):
            pygame.quit()
            sys.exit()

    screen.fill(bg_color)

    pygame.draw.rect(screen, (0, 0, 0), snake)

    pygame.draw.rect(screen, (255, 0, 0), food)

    pygame.display.update()
