import axios from "axios";
import { getToken } from "../auth/Token";
import apiConfig from "./apiConfig";

const { apiUrl } = apiConfig;

const returnResponse = (response) => {
  if (!response.success) {
    if (response?.data?.message) {
      alert(`Error: ${response.data.message}`);
    } else {
      alert("Error inesperado");
    }
  }
  return response;
};

export const loginService = async (email, pass) => {
  let response = {
    success: true,
    data: {},
  };
  console.log("aqui");
  try {
    console.log("correcto");
    const data = { email, pass };
    console.log("correcto");

    const dataResponse = await axios.post("http://localhost:3000/usuarios/login", data);

    response.data = dataResponse.data;
    console.log(response.data);

  } catch (error) {
    console.log("adios")
    response.success = false;
    response.data = error?.response?.data;
  }
  return returnResponse(response);
};

export const signupService = async (user_name, email, pass, date_birth, address) => {
  let response = {
    success: true,
    data: {},
  };
  try {
    console.log("hola1");
    const data = { user_name, email, pass, date_birth, address };
    
    console.log(data);

    const dataResponse = await axios.post("http://localhost:3000/usuarios/sign-up", data);
    response.data = dataResponse.data;
    console.log(response.data);

  } catch (error) {
    response.success = false;
    response.data = error?.response?.data;
  }
  return returnResponse(response);
};

export const AddTaskService = async (title, descript, start_date, end_date, estado) => {
  let response = {
    success: true,
    data: {},
  };
  try {
    console.log("hola1");
    const data = { title, descript, start_date, end_date, estado };
    
    console.log(data);

    const dataResponse = await axios.post("http://localhost:3000/task/addTask", data, {
      headers: {
        authorization: getToken()
      }
    });
    
    response.data = dataResponse.data;
    console.log(response.data);

  } catch (error) {
    response.success = false;
    response.data = error?.response?.data;
  }
  return returnResponse(response);
};

// export const AllTaskService = async (id_task,title, descript, start_date, end_date, estado,Users_id_user) => {
//   let response = {
//     success: true,
//     data: {},
//   };
//   try {

//     const data = { id_task,title, descript, start_date, end_date, estado,Users_id_user };
    
//     console.log(data);

//     const dataResponse = await axios.get("http://localhost:3000/task/all", data, {
//       headers: {
//         authorization: getToken()
//       }
//     }).then(res => {
//       const tareas = res.data.data;
//       console.log(tareas);
//       if (tareas?.length) { this.state({ tareas }); }
//   }).catch((error) => {
//       console.log(error.response.data);
//   });
    
//     response.data = dataResponse.data;
//     console.log(response.data);

//   } catch (error) {
//     response.success = false;
//     response.data = error?.response?.data;
//   }
//   return returnResponse(response);
// };




export const isAuthService = async () => {
  const token = getToken();
  let response = {
    success: true,
    data: {},
  };
  if (token) {
    try {
      const dataResponse = await axios.get(`${apiUrl}/usuarios/is-auth`, {
        headers: {
          authorization: token,
        },
      });
      response.data = dataResponse.data;
    } catch (error) {
      response.success = false;
      response.data = error?.response?.data;
    }
  } else {
    response.success = false;
    response.data.message = "No ha iniciado sesión";
  }
  return response;
};
