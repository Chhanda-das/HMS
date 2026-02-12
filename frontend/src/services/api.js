const API_URL = "http://localhost:5000/api";

// LOGIN
export const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// GET PROFILE
export const getProfile = async (token) => {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: { Authorization: token },
  });
  return res.json();
};

// GET PATIENTS
export const getPatients = async (token) => {
  const res = await fetch(`${API_URL}/patients`, {
    headers: { Authorization: token },
  });
  return res.json();
};

// ADD PATIENT  ✅ IMPORTANT
export const addPatient = async (data, token) => {
  const res = await fetch(`${API_URL}/patients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
