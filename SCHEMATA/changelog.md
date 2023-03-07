## Changelog - Schema

1. From version 0.1.6 to 0.1.7 (2023-01-13):
   - _Topic_relations_ (dh, nls, meta, rdm, infrastructure) were removed, since the topic related information is now covered by the _keywords_ section.
   - _Sustainability_plan_ added as a Boolean value to the _research_data_ section.
   - _Cooperation_ added a new relation type next to _sibling, child_ and _parent_.
2. From version 0.1.7 to 0.1.8 (2023-01-20):
   - _record_metadata_ simplified by changing the object _record_modified_ to a string _last_edited_on_
   - _relations_ element simplified by:
     - allowing only entries with a uuid
     - moving parent organizations to a new separate element _host_institutions_
     - removing all other entries without a uuid
   - _research_data_ element simplified by changing the _access_ object to a single number _open_access_
3. From version 0.1.8 to 0.1.9 (2023-03-07):
   - simplification of  _research_data_ element by merging _raw_, _refined_ and _final_ sections into one key. 
   - _host_institutions_ replaced with _related_institutions_ with "relation_type" as an additional key.
   - _relations_ renamed to _related_entities_.
