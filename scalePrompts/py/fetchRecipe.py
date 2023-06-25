def fetch_recipes(request):
    # Get the query parameters.
    query = request.GET.get("query", "")
    from_param = request.GET.get("from", "0")
    to_param = request.GET.get("to", "10")

    # Your Edamam API credentials.
    app_id = "a4c061f4"
    app_key = "2806daedced406623b70490469d63d24"

    # The URL for the API endpoint.
    url = f"https://api.edamam.com/search?q={query}&app_id={app_id}&app_key={app_key}&from={from_param}&to={to_param}"

    # Make the API request.
    response = requests.get(url, auth=(app_id, app_key))

    # Check the response status code.
    if response.status_code != 200:
        raise Exception("Error fetching recipes: {}".format(response.status_code))

    # Parse the response to JSON.
    data = response.json()

    # Extract the recipes from the data.
    recipes = []
    for hit in data["hits"]:
        recipes.append(
            {
                "title": hit["recipe"]["label"],
                "image_url": hit["recipe"]["image"],
            }
        )

    context = {"recipes": recipes}

    return render(request, "mealplanner_app/recipe_search.html", context)
