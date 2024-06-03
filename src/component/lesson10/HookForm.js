import {useForm} from 'react-hook-form'

const HookForm = () => {
    const {register,handleSubmit,getValues,formState:{errors,dirtyFields}}=useForm({mode:"onBlur"})

    const save=(data)=>{
         console.log(data)
    }

        return ( 
            <form onSubmit={handleSubmit(save)}>
            <div>
             <input type='text' {...register("firstName",{required:"Required field",minLength:2})}></input>
             {errors.firstName?.type=="required" && <p>{errors.firstName.message}</p>}
             {errors.firstName?.type=="minLength" && <p>מינימום 2 תווים</p>}
             {dirtyFields.firstName && <label>✔️</label>}<label>שם פרטי</label>
            </div>
            <div>
             <input type='text' {...register("lastName",{required:"Required field",minLength:2})}></input>
             {errors.lastName?.type=="required" && <p>{errors.lastName.message}</p>}
             {errors.lastName?.type=="minLength" && <p>מינימום 2 תווים</p>}
             {dirtyFields.lastName && <label>✔️</label>}<label>שם משפחה</label>
            </div>
            <div>
             <input type='text' {...register("identity",{pattern:/[0-9]{9}/})}></input>
             {errors.identity && <p>מספר זהות לא תקין</p>}
             {dirtyFields.identity && <label>✔️</label>}<label>מספר זהות</label>
            </div>
            <div>
             <input type='number' {...register("age",{min:1,max:120})}></input>
             {errors.age?.type=="min" && <p>גיל מינימלי 1</p>}
             {errors.age?.type=="max" && <p>גיל מקסימלי 120</p>}
             {dirtyFields.age && <label>✔️</label>}<label>גיל</label>
            </div>
            <div>
             <input type='email' {...register("email")}></input>
             {dirtyFields.email && <label>✔️</label>}<label>מייל</label>
            </div>
            <div>
             <input type='password' {...register("password")}></input>
             {dirtyFields.password && <label>✔️</label>}<label>סיסמא</label>
            </div>
            <div>
             <input type='password' {...register("passwordConfirm",{validate:value=>getValues("password")==value})}></input>
             {errors.passwordConfirm && <p>סיסמא לא זהה</p>}
             {dirtyFields.passwordConfirm && <label>✔️</label>}<label>אמת סיסמא</label>
            </div>
            <input type="submit"></input>
            </form>
         );
    }
     
    export default HookForm;