# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

return (

<ul>
<div className={`grid grid-cols-3 grid-flow-row-dense gap-5 px-6 `}>
{Filterweb.map((data) => {
count = count + 1;
if (count > 3) {
count = 0;
}
if (Filterweb.length == 1) {
return (
<li key={data.id} className="bg-slate-800 col-span-3">
{data.category} ({data.title}) - {data.subtitle}
</li>
);
} else if (Filterweb.length == 2) {
return count === 1 ? (
<li key={data.id} className="bg-slate-800">
{data.category} ({data.title}) - {data.subtitle}
</li>
) : (
<li key={data.id} className="bg-slate-800 col-span-2">
{data.category} ({data.title}) - {data.subtitle}
</li>
);
} else if (Filterweb.length == 3) {
return count === 1 ? (
<li key={data.id} className="bg-slate-800">
{data.category} ({data.title}) - {data.subtitle}
</li>
) : count === 2 ? (
<li key={data.id} className="bg-slate-800">
{data.category} ({data.title}) - {data.subtitle}
</li>
) : (
<li key={data.id} className="bg-slate-800">
{data.category} ({data.title}) - {data.subtitle}
</li>
);
}
})}
</div>
</ul>
);
};

/\*
let url: string =
"https://script.googleusercontent.com/macros/echo?user_content_key=j3IBU0EYBr0I1-IlEqakLM7V0SKzBhhcQJQVVE4kCYN9VB-VKzAt3rr3eLQ1TmwLLjac8dezRZ_9N3vcsXuTAC7YPtzOvpzam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnN1eg8ZKKHqZ0DaUEqUYiNBM_oYImYtrE8oCy6B7Qb1YpYYqIZSRuBzmvVr3MnH2LLeAxSPX-EFrHkfPyCBTEdyDf4bHQyFrntz9Jw9Md8uu&lib=MHDlpSe69UaqmmSKKcF_xDRNXq4f9lPiK";

fetch(url, {
mode: "no-cors",
method: "POST",
headers: {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "_",
},
})
.then((response) => response.json())
.then((jsonData) => {
// jsonData is parsed json object received from url
console.log(jsonData);
})
.catch((error) => {
// handle your errors here
console.error(error);
});
_/
