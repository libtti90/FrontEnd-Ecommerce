import './Register.css'

export default function Register() {
  return (
    <>
    <main className="main-container">
      <div className="user-register">
        <h1 className="register">REGISTER</h1>
        <hr />

        <form className='formRegister'  id="formRegister">

          <div>
            <label className="form-label" >
              Full Name
            </label>
            <input
              className="group"
              type="text"
              value=''
              name="nombreCompleto"
              id="inputName"
              placeholder="Jhon Doe"
              required
              minLength="2"
              maxLength="60"
              
            />
          </div>
          <div class="decoration">
                    <label class="form-label" for="inputEmail">Email Address</label>
                    <input class="group" type="email" value="" name="correoElectronico" id="inputEmail"
                        placeholder="JhonDoe@gmail.com" title="Please enter a valid email address."/>
                    <div class="square">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="decoration">
                    <label class="form-label" for="inputContrasena">Password</label>
                    <input class="group" type="password" value="" name="contrasena" id="inputContrasena"
                        placeholder="******" required 
                        title="Enter password"
                        maxlength="20"/>
                    <div class="square">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div>
                    <label class="form-label" for="inputRcontrasena">Repeat Password</label>
                    <input class="group" type="password" value="" name="contrasena" id="inputRcontrasena"
                        placeholder="******" required
                        title="Enter the same password again."/>


                </div>
                <div>
                    <label class="form-label" for="inputDateOfBirth">Date of Birth</label>
                    <input class="group" type="date" value="" name="fechaDeNacimiento" id="inputDateOfBirth"
                        placeholder="dd/mm/aaaa" min="1920-01-01" required title="Seleccione your date of Birth"/>
                </div>
                <div>
                    <label class="form-label" for="inputState">Select your State</label>
                    <select class="group" name="provincia" id="inputState">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>


          

          <div>
            <label className="form-label" >
              Observations
            </label>
            <textarea
              className="group"
              name="Observation"
              id="Observation"
              cols="10"
              rows="5"
              placeholder="Additional Information"
              value=''
             
            ></textarea>
          </div>

          <div>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    </main>
    </>
  )
}
