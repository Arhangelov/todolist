const url = "http://localhost:5001/";

export const createNoteService = async (newNote) => {
    return fetch( url, {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(newNote)
    }).then(res => res.json());
}