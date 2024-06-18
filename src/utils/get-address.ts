import { FormInstance } from "antd"
import axios from "axios"

const getAddresByCep = async (form: FormInstance<any>) => {
  const cep = form.getFieldValue("cep")

  if (cep.length == 8) {
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response: any) => {
      console.log(response)
      form.setFieldValue("endereco", `${response.data.logradouro} - ${response.data.bairro}`)
    })
  }
}

export default getAddresByCep
