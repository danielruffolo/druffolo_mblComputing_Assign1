import { Forum } from "../models/forum";

export class ForumService {

    private forums: Forum[] = [];

    addForum(title: string,
             description: string)

            {
                 const forum = new Forum(title, description);
                 this.forums.push(forum);
             }

             loadForums(){
                 return this.forums.slice();
             }

             deleteForum(index: number){
                 this.forums.slice(index, 1);
             }
}
