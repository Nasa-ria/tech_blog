import { useLocation, useNavigate, useParams } from "react-router-dom";


export function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export let abortController;

var Url = "http://localhost:3400/api/blog";

export const connectApi = async (endpoint, method = "GET", data = null) => {
	abortController = new AbortController();
    
	let options = {
		mode: "cors",
		method: method,
		headers: { "content-Type": "application/json" },
		signal: abortController.signal,
	};
	let optionsData;
	if (data) {
		optionsData = { ...options, body: JSON.stringify(data) };
		options = optionsData;
	}
	const response = await fetch(Url + endpoint, options);
	return response.json();
};

export const connectApiToFetchImage = async (
  endpoint,
  method = "GET",
  data = null,
) => {
  abortController = new AbortController();
  const Url = "http://localhost:3400/api/blog";

  let formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
    let options = {
      mode: "cors",
      method: method,
      body: formData,
      signal: abortController.signal,
    };
    const response = await fetch(Url + endpoint, options);
    return response.json();
  
};

// api for user interception
export const connectUserApi = async (endpoint, method = "GET", data = null) => {
//    const {auth} = UseAuth()
//    console.log(auth)
	abortController = new AbortController();
	const Url = "http://localhost:3400/api/blog/users";

	let options = {
		mode: "cors",
		method: method,
		headers: { "content-Type": "application/json" },
		signal: abortController.signal
	};
	// let optionsData;
	if (data) {
		let optionsData = { ...options, body: JSON.stringify(data) };
		options = optionsData;
	}
	const response = await fetch(Url + endpoint, options);
	return response.json();
};




    