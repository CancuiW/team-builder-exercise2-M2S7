import React from "react";

const Form=(props)=>{
    const {update,submit,values}=props

    const handleChange=evt=>{
        const {name,value}=evt.target
        update(name,value)
    }
    const handleSubmit=evt=>{
        evt.preventDefault()
       submit()
    }



    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input 
                  placeholder="Enter your name..."
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
            </label>
            <label> Email
                <input
                    placeholder="Enter your email..."
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />

            </label>
            <label> role
                <input
                    placeholder="Enter your role..."
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                />

            </label>
            <input type="submit" value="create your team" />
            
        </form>
    )
}

export default Form;