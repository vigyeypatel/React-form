import React, { Component } from 'react'
import InputField from "./InputField";
import Tick from "../tick.png";
import Asterisk from "../asterisk.png";
import Cross from "../cross.png"

interface AppStats {
    name: string;
    password: string;
    confirmpassword: string;
    age: number;
    errors: {
      nameError: string;
      passError: string;
      confpassError: string;
      ageError: string;
    };
    img: {
      nameIcon: string;
      passIcon: string;
      confpassIcon: string;
      ageIcon: string;
    };
    
    hobbies: Array<string>;
    gender: string;
    department: string;
    
    valid:{
        isNameValid: boolean;
        isPassValid: boolean;
        isConfPassValid: boolean;
        isAgeValid: boolean;
        isGenderValid:boolean;
        isHobbies:boolean
        },
    submitDisabled: boolean;
    selectValue?: string;
  }

export default class Form extends Component<{}, AppStats> {
    constructor(props: AppStats) {
        super(props);
        this.state = {
          name: "",
          password: "",
          confirmpassword: "",
          age: 0,
          department: "",
          hobbies: [],
          gender: "",
          errors: {
            nameError: "",
            passError: "",
            confpassError: "",
            ageError: ""
          },
          img: {
            nameIcon: Asterisk,
            passIcon: Asterisk,
            confpassIcon: Asterisk,
            ageIcon: Asterisk
          },
         valid:{
          isNameValid: false,
          isPassValid: false,
          isConfPassValid: false,
          isAgeValid: false,
          isGenderValid:false,
          isHobbies:false
        },
          
          submitDisabled: true
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.validationCheck = this.validationCheck.bind(this);
        this.reset =this.reset.bind(this);
      }
    
      reset(){
        this.setState({name: "",
        password: "",
        confirmpassword: "",
        age: 0,
        department: "",
        hobbies: [],
        gender: "",
        errors: {
          nameError: "",
          passError: "",
          confpassError: "",
          ageError: ""
        },
        img: {
          nameIcon: Asterisk,
          passIcon: Asterisk,
          confpassIcon: Asterisk,
          ageIcon: Asterisk
        },
       valid:{
        isNameValid: false,
        isPassValid: false,
        isConfPassValid: false,
        isAgeValid: false,
        isGenderValid:false,
        isHobbies:false
      },
        
        submitDisabled: true})
      }
    
      handleSubmit(e: any) {
        e.preventDefault();
       
      }
    
      // For handling input events
    
      handleChange(e: any) {
        let inputName: string = e.target.name;
        let val = e.target.value;
    
        this.setState({
          ...this.state,
          [inputName]: val
        });
      }
    
      // For handling CheckBoxes
    
      handleCheck(e: any) {
        let hobbies = this.state.hobbies;
    
        if (e.target.checked) {
          hobbies.push(e.target.value);
        }
    
        this.setState({
          ...this.state,
          hobbies: hobbies
        });
      }
    
      validationCheck(e: any) {
        let inputName = e.target.name;
        let inputVal = e.target.value;

        
    
        let errors = { ...this.state.errors };
        let img = { ...this.state.img };
        let valid ={...this.state.valid};
    
        // for name
    
        if (inputName === "name") {
          if (!inputVal) {
            img.nameIcon = Cross;
            errors.nameError = "Enter ur name";
            this.setState({ ...this.state, errors: errors,img : img });
          } 

          else if(!inputVal.match(/^[a-zA-Z ]*$/)){
            img.nameIcon = Cross;
            errors.nameError = "Only Letters";
            this.setState({ ...this.state, errors: errors,img : img });
            }

          else if (inputVal.length <= 5 || inputVal.length >= 10) {
            img.nameIcon = Cross;
            errors.nameError = "Letters should be between 6-10";
            this.setState({ ...this.state, errors: errors,img : img });
          } 
          
          else {
            errors.nameError = "";
            img.nameIcon = Tick;
            valid.isNameValid= true
            this.setState({ ...this.state, errors: errors,img : img,valid:valid });
          }
        }
    
        // 
    
        ////Password
        if (inputName === "password") {
          if (!inputVal) {
            errors.passError = "Please Enter the Password";
            img.passIcon = Cross;
            this.setState({ ...this.state, errors: errors,img: img });
          } 
          
          else if (inputVal.length < 3) {
            errors.passError = "Length Should be greater than 8 Letter ";
            img.passIcon= Cross;
            this.setState({ ...this.state, errors: errors });
          } 
          
          else {
            errors.passError = "";
            img.passIcon = Tick;
            valid.isPassValid= true
            this.setState({ ...this.state, errors: errors,img : img,valid:valid });
          }
        }
    
       
        ////conf Pass
    
        if (inputName === "confpassword") {
          if (!inputVal) {
            errors.confpassError = "Please Conform your password";
            img.confpassIcon = Cross;
            this.setState({ ...this.state, errors: errors,img: img });
          } 
          
          else if(inputVal !== this.state.password) {
              errors.confpassError = "Password is not matching";
              img.confpassIcon = Cross;
              this.setState({ ...this.state, errors: errors,img: img });
            } 
            else {
              errors.confpassError = "";
              img.confpassIcon = Tick;
              valid.isConfPassValid= true;
              this.setState({ ...this.state, errors: errors,img : img,valid: valid });
            }
          
        }
    
        
        /////Age/////////////
    
        if (inputName === "age") {
         
          if (!inputVal){
            errors.ageError = "Please Enter your Age";
            img.ageIcon = Cross;
            this.setState({ ...this.state, errors: errors,img: img});
            } 
        //   else if(!inputVal.match(/^[0-9]*$/))
        //      {
        //         errors.ageError = "Pls enter valid no.";
        //         this.setState({ ...this.state, errors:errors });
             
        else{ 
            
            if(inputVal <=18 || inputVal >=100)
             {
                errors.ageError = "Age should be between 18-100";
                img.ageIcon = Cross;
                this.setState({ ...this.state, errors:errors,img: img });
            }
          else{   
              errors.ageError = "";
              img.ageIcon =Tick;
              valid.isAgeValid= true;
              this.setState({ ...this.state, errors: errors,img: img,valid: valid});
            }
        }
        }

        if(inputName==="gender"){
            if(inputVal){
                valid.isGenderValid=true
                 this.setState({...this.state,valid: valid });
            }
        }

        if(inputName==="hobbies")
        {
            if(inputVal){
                valid.isHobbies=true;
                this.setState({...this.state,valid: valid });

            }
        }

    
        if(valid.isAgeValid && valid.isConfPassValid &&valid.isNameValid && valid.isPassValid&& valid.isGenderValid&&valid.isHobbies){
            this.setState({...this.state,submitDisabled:false})
        }
    
        
      }
    
      render() {
        const departments = ["Dept1", "Dept2", "Dept3", "Dept4", "Dept5"];
    
        const departOptions = departments.map((dept, index) => (
          <option key={index} value={dept}>
            {dept}
          </option>
        ));
    
        console.log(this.state);
        return (
          <React.Fragment>
            <h1>Form</h1>
            <main>
            <form onSubmit={this.handleSubmit}>
             <div>
                <label>
                  <span>
                    <img src={this.state.img.nameIcon} />
                  </span>
                  Name:
                  <InputField
                    inputType="text"
                    name="name"
                    focusoff={this.validationCheck}
                    change={this.handleChange}
                  />
                </label>
                </div>
                <div><span>{this.state.errors.nameError}</span></div>
                
             
                <div>
                <label>
                  <span>
                    <img src={this.state.img.passIcon} />
                  </span>
                  Password:
                  <InputField
                    inputType="password"
                    name="password"
                    focusoff={this.validationCheck}
                    change={this.handleChange}
                  />
                </label></div>

                <div><span>{this.state.errors.passError}</span></div>
              
                <div>
                <label>
                  <span>
                    <img src={this.state.img.confpassIcon} />
                  </span>
                  Confirm Password:
                  <InputField
                    inputType="password"
                    name="confpassword"
                    focusoff={this.validationCheck}
                    change={this.handleChange}
                  />
                </label></div>
               <div> <span>{this.state.errors.confpassError}</span></div>
              
                <div>
                <label>
                  <span>
                    <img src={this.state.img.ageIcon} />
                  </span>
                  Age:
                  <InputField
                    inputType="text"
                    name="age"
                    focusoff={this.validationCheck}
                    change={this.handleChange}
                  />
                </label></div>
               <div> <span>{this.state.errors.ageError}</span></div>
            
    
              {/* Department */}
              
                <label htmlFor="depart">Department:</label>
                <select onBlur={this.validationCheck}
                  name="department"
                  value={this.state.department}
                  id="depart"
                  onChange={this.handleChange}
                >
                  {departOptions}
                </select>
             
    
              {/* Gender */}
    
                <div>
                <label htmlFor="gender">Gender:</label>
               <div className="gender">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.handleChange}
                    value="Male"
                    onBlur={this.validationCheck}
                  />
                  Male
                </label>
              
               
                <label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.handleChange}
                    value="Female"
                    onBlur={this.validationCheck}
                  />
                  Female
                </label>
               
                </div>
              </div>


              {/* Hobbies */}
              <div>
                <label htmlFor="Hobby">Hobbies :</label>
               <div> <label>
                  <input  
                    type="checkbox"
                    name="hobbies"
                    onChange={this.handleCheck}
                    value="Reading"
                    onBlur={this.validationCheck}
                  />
                  Reading
                </label>

                 <label>
                  <input
                    type="checkbox"
                    name="hobbies"
                    onChange={this.handleCheck}
                    value="Music"
                    onBlur={this.validationCheck}
                  />
                  Music
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="hobbies"
                    onChange={this.handleCheck}
                    value="Playing"
                    onBlur={this.validationCheck}
                  />
                  Playing
                </label>
                <label>
                  <input
                  className="checkmark "
                    type="checkbox"
                    name="hobbies"
                    onChange={this.handleCheck}
                    value="Others"
                    onBlur={this.validationCheck}
                  />
                  Other
                </label>
                </div>
              </div>
    

              <div className="buttondiv">
                <button type="Submit" disabled={this.state.submitDisabled}>
                  Submit
                </button>
                <button type="Reset"  onClick={this.reset}>
                  Reset
                </button>
              </div>
            </form>
            </main>
          </React.Fragment>
        );
      }
    }
