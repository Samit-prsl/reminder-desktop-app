export interface auth {
  email: string;
  password: string;
}

export interface authprops {
  context: "Login" | "Register";
  Data: {
    email: string;
    password: string;
  };
  setData: (data: auth) => void;
  handleSubmit: (data: auth) => void;
}
