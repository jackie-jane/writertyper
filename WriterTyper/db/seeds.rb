# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Author.create(name: "F. Scott Fitzgerald", biography: 'TBA', controversy:'TBA')
Text.create(title: "The Romantic Egotist", words: 48084, characters: 269646,
 content: 'TBA', author_id: 2)
Author.create(name: "Emily Dickinson", biography: 'TBA', controversy:'TBA')
Text.create(title: "A Bird Came Down The Walk", words: 115, characters: 566,
content: 'A Bird, came down the Walk - 
He did not know I saw -
He bit an Angle Worm in halves
And ate the fellow, raw, 
 
And then, he drank a Dew
From a convenient Grass -
And then hopped sidewise to the Wall
To let a Beetle pass -
 
He glanced with rapid eyes,
That hurried all abroad -
They looked like frightened Beads, I thought,
He stirred his Velvet Head. - 
 
Like one in danger, Cautious,
I offered him a Crumb,
And he unrolled his feathers, 
And rowed him softer Home -
 
Than Oars divide the Ocean,
Too silver for a seam,
Or Butterflies, off Banks of Noon,
Leap, plashless as they swim. 
', author_id: 2)
Author.create(name: "John Donne", biography: 'TBA', controversy:'TBA')
Text.create(title: "Meditation 17", words: 81, characters: 389,
 content: 'No man is an island,
 entire of itself;
 every man is a piece of the continent,
 a part of the main.
 If a clod be washed away by the sea,
 Europe is the less,
 as well as if a promontory were.
 as well as if a manor of thy friend’s
 or of thine own were.
 Any man’s death diminishes me,
 because I am involved in mankind;
 and therefore never send to know for whom the bell tolls;
 it tolls for thee.', author_id: 3)