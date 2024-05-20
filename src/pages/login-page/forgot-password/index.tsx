function ForgotPasswordIndex() {
  return <>
      <div className="naasp-logo">
        <img
          src="src/assets/naasp.png"
          alt="naasp-logo"
          style={{ width: "300px", height: "150px" }}
        />
      </div>
        <div class="forgot_password">        
        <div class="forgot_password__message">
          Informe o seu e-mail abaixo para receber as instruções de como criar uma nova senha.
        </div>
        
        <div class="forgot_password__box">
          <div class="form-group  has-feedback">
            <input type="text" class="form-control  input-lg" placeholder="E-mail">
            <span class="glyphicon  glyphicon-envelope  form-control-feedback" aria-hidden="true"></span>
          </div>
          
          <div class="form-group">
          <button type="submit" class="btn  btn-primary  btn-lg  aw-btn-full-width">Criar nova senha</button>
          </div>
        </div>
      </div>
  </>
}

export default ForgotPasswordIndex
