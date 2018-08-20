var index = new Vue({
    el: '#index',
    data: {
        usernmae: '',
        password: ''
    },

    methods: {
        createItem(){
            event.preventDefault()
            axios.post('http://localhost:3000/item/create', {
                name: this.name,
                price: this.price,
                stock: this.stock,
                tags: this.tags
            })
            .then((response) => {
                if (response.status == 201) {
                    swal(response.data.message)
                    window.location.href="index.html"
                }else {
                    swal(response.data.message)
                }
            })
            .catch((err) => {
                swal('field is required')  
            })
        },

        login(){
            event.preventDefault()
            axios.post('http://localhost:3000/login', {
                usernmae: this.usernmae,
                password: this.password
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                swal({
                    title: response.data.message,
                    icon: "success",
                    button: "next",
                });
                window.location.href="http://localhost:8080/index.html"
            })
            .catch((err) => {
                swal(err.message)
            })
        }
    }
})