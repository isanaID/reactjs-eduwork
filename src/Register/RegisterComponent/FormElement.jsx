import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Input";
import ShowErrors from "./ShowErrors";
import * as Validator from 'validatorjs';
import '../../sass/register.scss';

export default class FormElement extends React.Component {
    state = {
        email: '',
        password: '',
        namadepan: '',
        namabelakang: '',
        nomorhp: '',
        repassword: '',
        errors: []
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const {email, password, namadepan, nomorhp, repassword} = this.state;

        let data = {
            email, password, namadepan, nomorhp, repassword
          };
          
          let rules = {
            email: 'required|email',
            password: 'required|min:8',
            namadepan: 'required',
            nomorhp: 'required|numeric|min:8',
            repassword: 'required|same:password'
          };
          
          let validation = new Validator(data, rules);
          validation.setAttributeNames({namadepan: 'Nama Depan', nomorhp: 'No HP', email: 'Email', password: 'Password', repassword: 'Masukan ulang Password'});
          validation.passes();
          this.setState({
            errors: [
            ...validation.errors.get('namadepan'),
            ...validation.errors.get('nomorhp'),
            ...validation.errors.get('email'),
            ...validation.errors.get('password'),
            ...validation.errors.get('repassword')
            ]
          })

            if(validation.passes()){
                alert(`
                Nama : ${this.state.namadepan} ${this.state.namabelakang}
                Email : ${this.state.email}
                No HP : ${this.state.nomorhp}
                Password : ${this.state.password}
                `)
            }

    }
    
    render() {
        return(
            <div className="body"><div className='bold-line'></div>
                <div className="containerregis">   
                <div className='window'>
                <div className='overlay'></div>
                    <div className='content'>
                    <div className='welcome'>Registration</div>
                    <div className='subtitle'>Untuk mendapatkan akun, silakan mendaftar.</div>
                <div className='input-fields'></div>
                <ShowErrors errors={this.state.errors}/>
            <form onSubmit={this.handleSubmit}>
                <Input type="text" name="namadepan" label="Nama Depan" placeholder="Nama Depan" className='input-line full-width' onChange={value => this.setState({namadepan: value})}/>
                <Input type="text" name="namabelakang" label="Nama Belakang" placeholder="Nama Belakang" className='input-line full-width' onChange={value => this.setState({namabelakang: value})}/>
                <Input type="text" name="nomorhp" label="No HP" placeholder="No HP" className='input-line full-width' onChange={value => this.setState({nomorhp: value})}/>
                <Input type="text" name="email" label="email" placeholder="Email" className='input-line full-width' onChange={value => this.setState({email: value})}/>
                <Input type="password" name="password" label="Password" placeholder="Password" className='input-line full-width' onChange={value => this.setState({password: value})}/>
                <Input type="password" name="repassword" label="Masukan ulang Password" placeholder="Masukan ulang Password" className='input-line full-width' onChange={value => this.setState({repassword: value})}/>
            <br />
            <div><button type="submit" className='ghost-round full-width'>Sign Up</button></div>
            </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
    
}