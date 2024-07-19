async function fetchUserData(){
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data')
  try {
    const response = await fetch(apiUrl);
    const users = await response.json()
    dataContainer.innerHTML = '';


    const userList = document.createElement('ul');


    users.forEach(user => {
      const listItems = document.createElement('li')
      listItems.textContent = user.name;
      userList.appendChild(listItem);
      dataContainer.appendChild(userList);
    });

  } catch (error) {

  }
}
fetchUserData();