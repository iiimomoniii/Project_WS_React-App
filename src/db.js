import PouchDB from 'pouchdb';

export default class DB {
    constructor(name){
        this.db = new PouchDB('react-notes');
        this.remote = new PouchDB("http://localhost:5984/react-notes");
        this.db.sync(this.remote, {
          live: true,
          retry: true
        }).on('change', function (change) {
          console.log("A db change occurred " + JSON.stringify(change));				
        }).on('paused', function () {
          console.log("Replication paused");				
        }).on('active', function (info) {
          console.log("Replication resumed " + info);				
        }).on('error', function (err) {
          console.log("Sync Error occurred " + err);				
        })
    }

    async getAllNotes(){
        let allNotes = await this.db.allDocs({
            include_docs : true
        });

        let notes = {};

        //
        allNotes.rows.forEach( n=> notes[n.id] = n.doc);

        return notes;
    }

    async createNote(note) {
        note.createdAt = new Date();
        note.updatedAt = new Date();

        const res = await this.db.post({ ...note });
        return res;
    }

  
}