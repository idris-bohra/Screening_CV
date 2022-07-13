console.log("this is jobs");


const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

function itra(data)
{
    let length =data.length;
    let currindex = 0;
    return {

        next : function(){
            
            if(currindex<length)
            {
                return{
                    value: data[currindex++],
                    done:false
                }
            }
            else
            {
                return{
                    done:true
                }
            }

        }
    }
}

let back = itra(data);

window.onload = fun;

function fun()
{
    let back2 = back.next();

    let back3 = back2.value;

    let profile = document.getElementById("profile");
    let image = document.getElementById("image");

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${back3.name}</li>
    <li class="list-group-item">${back3.age} years old</li>
    <li class="list-group-item">Lives in ${back3.city}</li>
    <li class="list-group-item">Primarily works on ${back3.language}</li>
    <li class="list-group-item">Uses ${back3.framework} framework</li>
  </ul>`;

  image.innerHTML = `<img src="${back3.image}" alt="">`
}

