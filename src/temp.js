const myCategories = [];
  for (let i = 0; i < categoriesList.length; i += 1) {
    const str = `cat${i}`;
    myCategories.push(<Category
      key={str}
      category={categoriesList[i].category}
    />);
  }